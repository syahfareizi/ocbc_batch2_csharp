from flask import make_response, abort
from config import db
from models import Directors, DirectorsSchema, Movies


def read_all():
    """
    This function responds to a request for /api/people
    with the complete lists of people
    :return:        json string of list of people
    """
    # Create the list of people from our data
    directors = Directors.query.limit(10)

    # Serialize the data for the response
    directors_schema = DirectorsSchema(many=True)
    data = directors_schema.dump(directors)
    return data


def read_one(id):
    """
    This function responds to a request for /api/directors/{id}
    with one matching director from directors
    :param id:   Id of director to find
    :return:            director matching id
    """
    # Build the initial query
    directors = (
        Directors.query.filter(Directors.id == id)
        .outerjoin(Movies)
        .one_or_none()
    )

    # Did we find a Movies?
    if directors is not None:

        # Serialize the data for the response
        director_schema = DirectorsSchema()
        data = director_schema.dump(directors)
        return data

    # Otherwise, nope, didn't find that Movies
    else:
        abort(404, f"Movies not found for Id: {id}")


def create(director):
    """
    This function creates a new person in the people structure
    based on the passed in person data
    :param person:  person to create in people structure
    :return:        201 on success, 406 on person exists
    """
    id = director.get("id")
    name = director.get("name")

    existing_director = (
        Directors.query.filter(Directors.id == id)
        .filter(Directors.name == name)
        .one_or_none()
    )

    # Can we insert this Director?
    if existing_director is None:

        # Create a Director instance using the schema and the passed in Director
        schema = DirectorsSchema()
        new_director = schema.load(director, session=db.session)

        # Add the Director to the database
        db.session.add(new_director)
        db.session.commit()

        # Serialize and return the newly created Director in the response
        data = schema.dump(new_director)

        return data, 201

    # Otherwise, nope, Director exists already
    else:
        abort(409, f"Director exists already")


def update(id, director):
    """
    This function updates an existing Director in the people structure
    :param Director_id:   Id of the Director to update in the people structure
    :param Director:      Director to update
    :return:            updated Director structure
    """
    # Get the Director requested from the db into session
    update_director = Directors.query.filter(
        Directors.id == id
    ).one_or_none()

    # Did we find an existing Director?
    if update_director is not None:

        # turn the passed in Director into a db object
        schema = DirectorsSchema()
        update = schema.load(director, session=db.session)

        # Set the id to the Director we want to update
        update.id = update_director.id

        # merge the new object into the old and commit it to the db
        db.session.merge(update)
        db.session.commit()

        # return updated Director in the response
        data = schema.dump(update_director)

        return data, 200

    # Otherwise, nope, didn't find that Director
    else:
        abort(404, f"Director not found")


def delete(id):
    """
    This function deletes a Director from the directors structure
    :param Director_id:   Id of the Director to delete
    :return:            200 on successful delete, 404 if not found
    """
    # Get the Director requested
    director = Directors.query.filter(Directors.id == id).one_or_none()

    # Did we find a Director?
    if director is not None:
        db.session.delete(director)
        db.session.commit()
        return make_response(f"Director deleted", 200)

    # Otherwise, nope, didn't find that Director
    else:
        abort(404, f"Director not found")

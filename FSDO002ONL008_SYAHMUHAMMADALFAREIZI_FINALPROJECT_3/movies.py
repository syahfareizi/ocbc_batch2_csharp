from flask import make_response, abort
from config import db
from models import Directors, Movies, MoviesSchema


def read_all():
    """
    This function responds to a request for /api/people
    with the complete lists of people
    :return:        json string of list of people
    """
    # Create the list of people from our data
    movies = Movies.query.all()

    # Serialize the data for the response
    movies_schema = MoviesSchema(many=True)
    data = movies_schema.dump(movies)
    return data


def read_top_10():
    """
    This function responds to a request for /api/people
    with the complete lists of people
    :return:        json string of list of people
    """
    # Create the list of people from our data
    movies = Movies.query.order_by(db.desc(Movies.popularity)).limit(10)

    # Serialize the data for the response
    movies_schema = MoviesSchema(many=True)
    data = movies_schema.dump(movies)
    return data


def read_one(id):
    """
    This function responds to a request for /api/movies/{id}
    with one matching person from people
    :param id:   Id of Movies to find
    :return:            movies matching id
    """
    # Build the initial query
    movies = (
        Movies.query.filter(Movies.id == id)
        .one_or_none()
    )

    # Did we find a Movies?
    if movies is not None:

        # Serialize the data for the response
        movies_schema = MoviesSchema()
        data = movies_schema.dump(movies)
        return data

    # Otherwise, nope, didn't find that Movies
    else:
        abort(404, f"Movies not found for Id: {id}")


def create(director_id, movies):
    """
    This function creates a new Movies data related to the passed in Director id.
    :param Director_id:       Id of the Director the Movies data is related to
    :param Movies data:            The JSON containing the Movies data data
    :return:                201 on success
    """
    # get the parent Director
    director = Directors.query.filter(
        Directors.id == director_id).one_or_none()

    # Was a Director found?
    if director is None:
        abort(404, f"Director not found for Id")

    # Create a Movies data schema instance
    schema = MoviesSchema()
    new_movie = schema.load(movies, session=db.session)

    # Add the Movies data to the Director and database
    director.movies.append(new_movie)
    db.session.commit()

    # Serialize and return the newly created Movies data in the response
    data = schema.dump(new_movie)

    return data, 201


def update(director_id, movie_id, movies):
    """
    This function updates an existing Movies related to the passed in
    director id.
    :param director_id:       Id of the director the Movies is related to
    :param Movies_id:         Id of the Movies to update
    :param content:            The JSON containing the Movies data
    :return:                200 on success
    """
    update_movies = (
        Movies.query.filter(Directors.id == director_id)
        .filter(Movies.id == movie_id)
        .one_or_none()
    )

    # Did we find an existing Movies?
    if update_movies is not None:

        # turn the passed in Movies into a db object
        schema = MoviesSchema()
        update = schema.load(movies, session=db.session)

        # Set the id's to the Movies we want to update
        update.director_id = update_movies.director_id
        update.id = update_movies.id

        # merge the new object into the old and commit it to the db
        db.session.merge(update)
        db.session.commit()

        # return updated Movies in the response
        data = schema.dump(update_movies)

        return data, 200

    # Otherwise, nope, didn't find that Movies
    else:
        abort(404, f"Note not found")


def delete(director_id, movie_id):
    """
    This function deletes a note from the note structure
    :param person_id:   Id of the person the note is related to
    :param note_id:     Id of the note to delete
    :return:            200 on successful delete, 404 if not found
    """
    # Get the note requested
    movies = (
        Movies.query.filter(Directors.id == director_id)
        .filter(Movies.id == movie_id)
        .one_or_none()
    )

    # did we find a note?
    if movies is not None:
        db.session.delete(movies)
        db.session.commit()
        return make_response(
            "Movies deleted", 200
        )

    # Otherwise, nope, didn't find that note
    else:
        abort(404, f"Movies not found")

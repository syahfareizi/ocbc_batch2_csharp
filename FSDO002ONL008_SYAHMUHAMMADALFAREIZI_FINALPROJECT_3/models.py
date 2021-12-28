from config import db, ma
from marshmallow import fields


class Directors(db.Model):
    __tablename__ = 'directors'
    name = db.Column(db.Text)
    id = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.Integer)
    uid = db.Column(db.Integer)
    department = db.Column(db.Text)
    movies = db.relationship(
        'Movies',
        backref='directors',
        cascade='all, delete, delete-orphan',
        single_parent=True,
    )


class Movies(db.Model):
    __tablename__ = 'movies'
    id = db.Column(db.Integer, primary_key=True)
    original_title = db.Column(db.Text)
    budget = db.Column(db.Integer)
    popularity = db.Column(db.Integer)
    release_date = db.Column(db.Text)
    revenue = db.Column(db.Integer)
    title = db.Column(db.Text)
    vote_average = db.Column(db.Float)
    vote_count = db.Column(db.Integer)
    tagline = db.Column(db.Text)
    uid = db.Column(db.Integer)
    overview = db.Column(db.Text)
    director_id = db.Column(db.Integer, db.ForeignKey('directors.id'))
    # directors = db.relationship(
    #     'Directors',
    #     backref='movies',
    #     cascade='all, delete, delete-orphan',
    #     single_parent=True,
    # )


class DirectorsSchema(ma.SQLAlchemyAutoSchema):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    class Meta:
        model = Directors
        sqla_session = db.session
        load_instance = True

    movies = fields.Nested("DirectorsMoviesSchema", default=[], many=True)


class MoviesSchema(ma.SQLAlchemyAutoSchema):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    class Meta:
        model = Movies
        sqla_session = db.session
        load_instance = True

    directors = fields.Nested('MoviesDirectorsSchema', default=[])


class DirectorsMoviesSchema(ma.SQLAlchemyAutoSchema):
    """
    This class exists to get around a recursion issue
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    id = fields.Int()
    original_title = fields.Str()
    budget = fields.Int()
    popularity = fields.Int()
    release_date = fields.Str()
    revenue = fields.Int()
    title = fields.Str()
    vote_average = fields.Float()
    vote_count = fields.Int()
    tagline = fields.Str()


class MoviesDirectorsSchema(ma.SQLAlchemyAutoSchema):
    """
    This class exists to get around a recursion issue
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    name = fields.Str()
    id = fields.Int()
    gender = fields.Int()
    uid = fields.Int()
    department = fields.Str()

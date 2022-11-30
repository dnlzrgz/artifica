"""
WSGI config for artifica project.

It exposes the WSGI callable as a module-level variable named ``application``.
"""

import os

from django.core.wsgi import get_wsgi_application
from whitenoise import WhiteNoise

from artifica.settings import PROJECT_DIR

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "artifica.settings")

application = get_wsgi_application()
application = WhiteNoise(application, root=os.path.join(PROJECT_DIR, "staticfiles"))

from wagtail.admin.panels import FieldPanel
from wagtail.fields import StreamField
from wagtail.models import Page

from .applets import AppletsBlock


class HomePage(Page):
    """
    Home page model.
    """

    applets = StreamField(
        AppletsBlock(),
        null=True,
        use_json_field=True,
        min_num=5,
    )

    content_panels = Page.content_panels + [
        FieldPanel("applets"),
    ]

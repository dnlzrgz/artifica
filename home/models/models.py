from wagtail.admin.panels import FieldPanel
from wagtail.models import Page
from wagtail.fields import StreamField

from .applets import AppletsBlock


class HomePage(Page):
    applets = StreamField(
        AppletsBlock(),
        null=True,
        use_json_field=True,
        min_num=5,
    )

    content_panels = Page.content_panels + [
        FieldPanel("applets"),
    ]

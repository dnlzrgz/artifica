from wagtail.blocks import (
    CharBlock,
    EmailBlock,
    ListBlock,
    RichTextBlock,
    StreamBlock,
    StructBlock,
    URLBlock,
)
from wagtail.documents.blocks import DocumentChooserBlock


class TextualApplet(StructBlock):
    """
    Applet with a rich text body.
    """

    class Meta:
        template = "home/applets/textual_applet.html"

    title = CharBlock(max_length=20)
    content = RichTextBlock(
        features=[
            "h2",
            "bold",
            "italic",
            "link",
        ]
    )


class VideoApplet(StructBlock):
    """
    Applet to showcase videos.
    """

    class Meta:
        template = "home/applets/video_applet.html"

    title = CharBlock(max_length=20)
    media = DocumentChooserBlock()


class SocialLinksApplet(StructBlock):
    """
    Applet to display a list of links for social media like Instagram
    or Twitter.
    """

    class Meta:
        template = "home/applets/social_links_applet.html"

    title = CharBlock(max_length=20)
    links = ListBlock(
        StructBlock(
            [
                ("title", CharBlock()),
                ("url", URLBlock()),
            ],
            label="links",
        )
    )


class NotesApplet(StructBlock):
    """
    Applet for F&Q.
    """

    class Meta:
        template = "home/applets/notes_applet.html"

    title = CharBlock(max_length=20)
    notes = ListBlock(
        StructBlock(
            [
                ("title", CharBlock()),
                (
                    "content",
                    RichTextBlock(
                        features=[
                            "h2",
                            "bold",
                            "italic",
                            "link",
                        ]
                    ),
                ),
            ],
            label="notes",
        )
    )


class TodoApplet(StructBlock):
    """
    Applet to display a functional ToDo list.
    """

    class Meta:
        template = "home/applets/todo_applet.html"

    title = CharBlock(max_length=20)
    tasks = ListBlock(CharBlock(), label="tasks")


class ButtonApplet(StructBlock):
    """
    Applet for an actionable button.
    """

    class Meta:
        template = "home/applets/button_applet.html"

    title = CharBlock(max_length=20)
    description = CharBlock()
    url = URLBlock()


class ContactApplet(StructBlock):
    """
    Applet for a contact button.
    """

    class Meta:
        template = "home/applets/contact_applet.html"

    title = CharBlock(max_length=20)
    email = EmailBlock()


class AppletsBlock(StreamBlock):
    """
    Block of applets.
    """

    textual_applet = TextualApplet()
    video_applet = VideoApplet()
    social_links_applet = SocialLinksApplet()
    todo_applet = TodoApplet()
    notes_applet = NotesApplet()
    button_applet = ButtonApplet()
    contact_applet = ContactApplet()

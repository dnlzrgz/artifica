from wagtail.blocks import (
    StructBlock,
    CharBlock,
    RichTextBlock,
    ListBlock,
    URLBlock,
    StreamBlock,
)
from wagtail.embeds.blocks import EmbedBlock


class TextualApplet(StructBlock):
    """
    Applet with a rich text body.
    """

    title = CharBlock(max_length=20)
    content = RichTextBlock(
        features=[
            "bold",
            "italic",
            "link",
        ]
    )


class VideoApplet(StructBlock):
    """
    Applet to showcase videos.
    """

    title = CharBlock(max_length=20)
    media = EmbedBlock()


class SocialLinksApplet(StructBlock):
    """
    Applet to display a list of links for social media like Instagram
    or Twitter.
    """

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

    title = CharBlock(max_length=20)
    notes = ListBlock(
        StructBlock(
            [
                ("title", CharBlock()),
                ("description", CharBlock()),
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

    title = CharBlock(max_length=20)
    tasks = ListBlock(CharBlock(), label="tasks")


class ButtonApplet(StructBlock):
    """
    Applet for an actionable button.
    """

    title = CharBlock(max_length=20)
    description = CharBlock()
    url = URLBlock()


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

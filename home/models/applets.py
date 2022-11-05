from wagtail.blocks import (
    CharBlock,
    DateBlock,
    EmailBlock,
    ListBlock,
    RichTextBlock,
    StreamBlock,
    StructBlock,
    URLBlock,
)
from wagtail.documents.blocks import DocumentChooserBlock


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


class NotesApplet(StructBlock):
    """
    Applet for F&Q-like content.
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


class PomodoroApplet(StructBlock):
    """
    Applet to display a functional pomodoro.
    """

    class Meta:
        template = "home/applets/pomodoro_applet.html"

    title = CharBlock(max_length=20)


class SocialLinksApplet(StructBlock):
    """
    Applet to display a list of links for social media like Instagram
    or Twitter in a dropdown menu format.
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


class TestimoniesApplet(StructBlock):
    """
    Applet to display testimonies.
    """

    class Meta:
        template = "home/applets/testimonies_applet.html"

    title = CharBlock(max_length=20)
    testimonies = ListBlock(
        StructBlock(
            [
                ("quote", CharBlock()),
                ("photo", DocumentChooserBlock()),
                ("name", CharBlock()),
                ("description", CharBlock()),
            ],
            label="testimonies",
        )
    )


class TextualApplet(StructBlock):
    """
    Applet with a rich text body to display content as in a note-like app
    format.
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


class TimelineApplet(StructBlock):
    """
    Applet to display a timeline.
    """

    class Meta:
        template = "home/applets/timeline_applet.html"

    title = CharBlock(max_length=20)
    events = ListBlock(
        StructBlock(
            [
                ("date", DateBlock()),
                ("title", CharBlock(max_length=20)),
                ("description", CharBlock()),
            ],
            label="events",
        )
    )


class TodoApplet(StructBlock):
    """
    Applet to display a functional To Do list.
    """

    class Meta:
        template = "home/applets/todo_applet.html"

    title = CharBlock(max_length=20)
    tasks = ListBlock(CharBlock(), label="tasks")


class VideoApplet(StructBlock):
    """
    Applet to showcase videos.
    """

    class Meta:
        template = "home/applets/video_applet.html"

    title = CharBlock(max_length=20)
    media = DocumentChooserBlock()


class AppletsBlock(StreamBlock):
    """
    Block of applets.
    """

    button_applet = ButtonApplet()
    contact_applet = ContactApplet()
    notes_applet = NotesApplet()
    pomodoro_applet = PomodoroApplet()
    social_links_applet = SocialLinksApplet()
    testimonies_applet = TestimoniesApplet()
    textual_applet = TextualApplet()
    timeline_applet = TimelineApplet()
    todo_applet = TodoApplet()
    video_applet = VideoApplet()

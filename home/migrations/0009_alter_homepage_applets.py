# Generated by Django 4.1.2 on 2022-10-28 10:18

from django.db import migrations
import wagtail.blocks
import wagtail.embeds.blocks
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0008_alter_homepage_applets"),
    ]

    operations = [
        migrations.AlterField(
            model_name="homepage",
            name="applets",
            field=wagtail.fields.StreamField(
                [
                    (
                        "textual_applet",
                        wagtail.blocks.StructBlock(
                            [
                                ("title", wagtail.blocks.CharBlock(max_length=20)),
                                (
                                    "content",
                                    wagtail.blocks.RichTextBlock(
                                        features=["h2", "bold", "italic", "link"]
                                    ),
                                ),
                            ]
                        ),
                    ),
                    (
                        "video_applet",
                        wagtail.blocks.StructBlock(
                            [
                                ("title", wagtail.blocks.CharBlock(max_length=20)),
                                ("media", wagtail.embeds.blocks.EmbedBlock()),
                            ]
                        ),
                    ),
                    (
                        "social_links_applet",
                        wagtail.blocks.StructBlock(
                            [
                                ("title", wagtail.blocks.CharBlock(max_length=20)),
                                (
                                    "links",
                                    wagtail.blocks.ListBlock(
                                        wagtail.blocks.StructBlock(
                                            [
                                                ("title", wagtail.blocks.CharBlock()),
                                                ("url", wagtail.blocks.URLBlock()),
                                            ],
                                            label="links",
                                        )
                                    ),
                                ),
                            ]
                        ),
                    ),
                    (
                        "todo_applet",
                        wagtail.blocks.StructBlock(
                            [
                                ("title", wagtail.blocks.CharBlock(max_length=20)),
                                (
                                    "tasks",
                                    wagtail.blocks.ListBlock(
                                        wagtail.blocks.CharBlock(), label="tasks"
                                    ),
                                ),
                            ]
                        ),
                    ),
                    (
                        "notes_applet",
                        wagtail.blocks.StructBlock(
                            [
                                ("title", wagtail.blocks.CharBlock(max_length=20)),
                                (
                                    "notes",
                                    wagtail.blocks.ListBlock(
                                        wagtail.blocks.StructBlock(
                                            [
                                                ("title", wagtail.blocks.CharBlock()),
                                                (
                                                    "content",
                                                    wagtail.blocks.RichTextBlock(
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
                                    ),
                                ),
                            ]
                        ),
                    ),
                    (
                        "button_applet",
                        wagtail.blocks.StructBlock(
                            [
                                ("title", wagtail.blocks.CharBlock(max_length=20)),
                                ("description", wagtail.blocks.CharBlock()),
                                ("url", wagtail.blocks.URLBlock()),
                            ]
                        ),
                    ),
                    (
                        "contact_applet",
                        wagtail.blocks.StructBlock(
                            [
                                ("title", wagtail.blocks.CharBlock(max_length=20)),
                                ("email", wagtail.blocks.EmailBlock()),
                            ]
                        ),
                    ),
                ],
                null=True,
                use_json_field=True,
            ),
        ),
    ]
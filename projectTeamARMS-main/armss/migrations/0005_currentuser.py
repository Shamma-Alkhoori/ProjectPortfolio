# Generated by Django 4.1.3 on 2022-12-03 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('armss', '0004_appointment'),
    ]

    operations = [
        migrations.CreateModel(
            name='CurrentUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.TextField()),
                ('name', models.TextField()),
            ],
        ),
    ]

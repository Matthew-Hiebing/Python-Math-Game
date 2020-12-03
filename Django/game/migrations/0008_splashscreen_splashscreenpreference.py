# Generated by Django 3.1.2 on 2020-11-20 23:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('game', '0007_auto_20201120_1708'),
    ]

    operations = [
        migrations.CreateModel(
            name='SplashScreen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('splash_screen_name', models.CharField(max_length=100)),
                ('splash_screen_message', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='SplashScreenPreference',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('splash_screen', models.CharField(max_length=100, null=True)),
                ('display_on_refresh', models.BooleanField(default=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

from django.db import models

class Monday(models.Model):
    group = models.TextField(default="group")
    lessons = models.TextField(default="lessons")
    def __str__(self):
        return self.group

    class Meta:
        verbose_name = '1 Понеділок'
        verbose_name_plural = '1 Понеділок'

class Tuesday(models.Model):
    group = models.TextField(default="group")
    lessons = models.TextField(default="lessons")
    def __str__(self):
        return self.group
    class Meta:
        verbose_name = '2 Вівторок'
        verbose_name_plural = '2 Вівторок'

class Wednesday(models.Model):
    group = models.TextField(default="group")
    lessons = models.TextField(default="lessons")
    def __str__(self):
        return self.group
    class Meta:
        verbose_name = '3 Середа'
        verbose_name_plural = '3 Середа'

class Thursday(models.Model):
    group = models.TextField(default="group")
    lessons = models.TextField(default="lessons")
    def __str__(self):
        return self.group
    class Meta:
        verbose_name = '4 Четвер'
        verbose_name_plural = '4 Четвер'

class Friday(models.Model):
    group = models.TextField(default="group")
    lessons = models.TextField(default="lessons")
    def __str__(self):
        return self.group
    class Meta:
        verbose_name = '5 П\'ятниця'
        verbose_name_plural = '5 П\'ятниця'

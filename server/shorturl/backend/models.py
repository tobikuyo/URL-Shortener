from django.db import models

class Shorturl(models.Model):
    url = models.CharField(max_length=300)
    code = models.CharField(max_length=7)

    def _str_(self):
        return self.url
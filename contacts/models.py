from django.db import models

from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length = 50)
    mobileNumber = models.CharField(max_length = 20)

    def __str__(self):
        return self.mobileNumber
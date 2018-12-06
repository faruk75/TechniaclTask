from django.urls import path, include
from django.views.generic import TemplateView
from . import views
from rest_framework import routers 

router = routers.DefaultRouter()
router.register('contact', views.ContactView)

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/v1/', include(router.urls))
]

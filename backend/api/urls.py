from rest_framework.routers import DefaultRouter
from django.contrib import admin
from django.urls import path
from .views import *


router = DefaultRouter()
router.register('country', CountryViewSet, basename='country')
router.register('characteristic', CharacteristicViewSet, basename='characteristic')
router.register('league', LeagueViewSet, basename='league')

urlpatterns = router.urls
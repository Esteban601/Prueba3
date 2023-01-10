from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),

    path('materialidad', views.materialidad, name='materialidad'),
    path('estrategia-asg', views.estrategia_asg, name='estrategia-asg'),
    path('vinculacion-ods', views.vinculacion_ods, name='vinculacion-ods'),

    path('gestion-ambiental', views.gestion_ambiental, name='gestion-ambiental'),
    path('gestion-recursos', views.gestion_recursos, name='gestion-recursos'),
    path('residuos', views.residuos, name='residuos'),
    path('contenido-descargable', views.contenido_descargable, name='contenido-descargable'),

    path('diversidad-inclusion', views.diversidad_inclusion, name='diversidad-inclusion'),
    path('salud-seguridad-bienestar', views.salud_seguridad_bienestar, name='salud-seguridad-bienestar'),
    path('compromiso-social', views.compromiso_social, name='compromiso-social'),

    path('cadena-suministros', views.cadena_suministros, name='cadena-suministros'),

    path('contacto', views.contacto, name='contacto'),

    path('send-subscription', views.send_subscription, name='send-subscription'),
    path('send-mail-contact', views.send_mail_contact, name='send-mail-contact'),
]

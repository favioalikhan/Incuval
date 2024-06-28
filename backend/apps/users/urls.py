from django.urls import path
from .views import RegisterView, DetailView, ListView, DeleteView, UpdateView

urlpatterns = [
    path('', RegisterView.as_view(), name='user-list-create'),
    path('<int:pk>/', DetailView.as_view(), name='user-detail'),
    path('all/', ListView.as_view(), name='all-users-list'),  
    path('delete/<int:pk>/', DeleteView.as_view(), name='user-delete'), 
    path('update/<int:pk>/', UpdateView.as_view(), name='user-update'), 
]
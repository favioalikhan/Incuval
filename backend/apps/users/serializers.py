# apps/users/serializers.py
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            'id', 'username', 'email', 'password', 'user_type', 'paternal_last_name',
            'maternal_last_name', 'phone', 'gender', 'date_of_birth',
            'receive_updates'
        )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            email=validated_data['email'],
            username=validated_data['username'],
            user_type=validated_data['user_type'],
            paternal_last_name=validated_data['paternal_last_name'],
            maternal_last_name=validated_data['maternal_last_name'],
            phone=validated_data['phone'],
            gender=validated_data['gender'],
            date_of_birth=validated_data['date_of_birth'],
            receive_updates=validated_data['receive_updates'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

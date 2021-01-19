package io.example.web;

import org.springframework.data.mongodb.repository.MongoRepository;
@Repository
public interface UserRepository extends MongoRepository<User,String>{}
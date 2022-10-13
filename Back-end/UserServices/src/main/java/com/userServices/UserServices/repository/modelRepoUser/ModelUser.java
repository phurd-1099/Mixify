package com.userServices.UserServices.repository.modelRepoUser;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "user-data")
@ToString
public class ModelUser {
    @Id
    private String id;
    private String username;

}

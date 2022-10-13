package com.userServices.UserServices.repository.modelRepoPlaylist;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "playlist-data")
@ToString
public class ModelPlaylist {

    @Id
    private String id;
    private String title;

}

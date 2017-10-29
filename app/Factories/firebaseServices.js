"use strict";

app.factory("FirebaseStorage", function (FBCreds, $q, $http) {

//user specific interactions with FB
    let addMember = (newMember) => {
        return $q((resolve, reject) => {
            $http.post(`${FBCreds.databaseURL}/members.json`,
                JSON.stringify(newMember))
                .then((ObjectFromFirebase) => {
                    resolve(ObjectFromFirebase);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    return {addMember};

});
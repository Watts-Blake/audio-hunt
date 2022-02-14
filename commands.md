## FOR THE USER MODEL/MIGRATION GENERATION:
npx sequelize model:generate --name User --attributes username:string,header:string,email:string,hashedPassword:string,bio:text,activeState:boolean

## FOR THE SONGS MODEL/MIGRATION GENERATION:
npx sequelize model:generate --name Song --attributes songName:string,albumName:string,artistName:string,releaseDate:string,songUrl:string,albumImgUrl:string,artistImgUrl:string

## FOR THE POST MODEL/MIGRATION GENERATION:
npx sequelize model:generate --name Post --attributes userId:integer,songId:integer,title:string,shortDescription:string,content:text

## FOR THE COMMENTS MODEL/MIGRATION GENERATION:
npx sequelize model:generate --name Comment --attributes userId:integer,postId:integer,content:text

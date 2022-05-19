export class Banda {
  id: number;
  name:String;
  numberOfMembers: number;
  description: String;
  popularSongs: String;
  image: String;

  public constructor(id: number,
    name:String,
    numberOfMembers: number,
    description: String,
    popularSongs: String,
    image: String){
      this.id=id;
      this.name=name;
      this.numberOfMembers=numberOfMembers;
      this.description=description;
      this.popularSongs=popularSongs;
      this.image=image;

  }
}

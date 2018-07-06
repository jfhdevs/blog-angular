export class Post {
  loveIts : number;
  createdAt: Date;
  
//  Créer un nouveau post
//    Initialiser à zéro le compteur de like du post
//    Initialiser à la date du jour la date de création du post
  constructor (public title: string,
               public content: string) {
    this.loveIts = 0;
    this.createdAt = new Date();
  } // constructor

  incLoveIts() { this.loveIts++; }
  decLoveIts() { this.loveIts--; }
  
} // class Post

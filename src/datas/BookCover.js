import { format } from 'date-fns';

export default class BookCover{
  constructor(data){
    this.data = data;
    this.results = [];
    this.total = this.data.total
    this.current_page = this.data.current_page
    this.next_page = this.data.next_page
    this.last_page = this.data.last_page
    this.preview_page = Number(this.data.current_page) - 1

    this.data.results.map((item) => {
      let data_ = new Data(item.title, item.thumbnail, item.id, item.user_favorite)
      this.results.push(data_);
    }) 
  }
}

class Data{
  constructor(title, thumbnail, id, user_favorite){
    this.title = title;
    this.id = id;
    this.thumbnail = thumbnail.path + '.' + thumbnail.extension
    this.user_favorite = user_favorite
  }
}
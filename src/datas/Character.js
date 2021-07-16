export default class Character{
  constructor(data){
    this.data = data.data;
    this.results = [];
    this.total = this.data.total
    this.current_page = this.data.current_page
    this.next_page = this.data.next_page
    this.last_page = this.data.last_page
    this.preview_page = Number(this.data.current_page) - 1

    this.data.results.map((item) => {
      let data_ = new Data(item.name, item.thumbnail, item.id, item.user_favorite);
      this.results.push(data_);
    }) 
  }
}

class Data{
  constructor(name, thumbnail, id, user_favorite){
    this.title = name;
    this.id = id;
    this.thumbnail = thumbnail.path + '.' + thumbnail.extension;
    this.user_favorite = user_favorite;
  }
}
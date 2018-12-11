import { RESTDataSource } from 'apollo-datasource-rest'

export default class ProgramsDatasource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:8080/'
  }

  getProgramById(programId) {
    //return this.get(`/programs/${programId}`)
    return {
      id: programId,
      title: 'My awesome program',
      description: 'This program is awesome',
      poster: 'https://s3.glbimg.com/v1/AUTH_2caf29d99e86401197555831070efae8/secure/home-share-d5539fc.jpg',
      characters: ['Moe', 'Curly', 'Larry'],
      episodeDuration: 60
    }
  }
}
const apiHost = process.env.REACT_APP_SW_API_HOST;

class PlanetsApiService {
  getPlanets = async page => fetch(`${apiHost}/planets/?page=${page}`);
  getPlanet = async id => fetch(`${apiHost}/planets/${id}/`);
}
export default new PlanetsApiService();

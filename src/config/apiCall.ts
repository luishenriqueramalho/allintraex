import superagentPromise from "superagent-promise";
import _superagent, { ResponseError, Request, Response } from "superagent";

// Config superagent
const superagent = superagentPromise(_superagent, global.Promise);

interface BodyResponse {}

const handleError = (err: ResponseError, onAuthError: () => void) => {
  if (err?.status === 401) {
    onAuthError();
  }
  if (err?.response?.body?.statusCode != 200) {
    return err?.response?.body;
  }
};

const responseBody = (res: Response) => {
  return res.body as BodyResponse;
};

const requests = {
  get: (url: string) =>
    superagent.get(`${url}`).then(responseBody).catch(handleError),
  post: (url: string, body: any) =>
    superagent.post(`${url}`, body).then(responseBody).catch(handleError),
  put: (url: string, body: any) =>
    superagent.put(`${url}`, body).then(responseBody).catch(handleError),
  del: (url: string) =>
    superagent.del(`${url}`).then(responseBody).catch(handleError),
};

// Routes API
const NoticesRoute = {
  getNotices: () =>
    requests.get(
      `https://servicodados.ibge.gov.br/api/v3/noticias/?busca=bolsa`
    ),
};

const CryptosPriceRoute = {
  getPricesCrypto: () =>
    requests.get(`https://api.binance.com/api/v3/ticker/price`),
};

const DolarPriceRoute = {
  getDolarPrice: () =>
    requests.get(`https://economia.awesomeapi.com.br/last/USD-BRL`),
};

const apiCall = {
  NoticesRoute,
  CryptosPriceRoute,
  DolarPriceRoute,
};

export default apiCall;

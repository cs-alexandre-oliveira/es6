var ConnectionFactory = (function tmp() {
  const stores = ['negociacoes'];
  const dbName = ['aluraframe'];
  const version = 3;

  var connection = null;
  var close = null;

  return class ConnectionFactory {
    constructor() {
      throw new Error('Não é possivel instanciar ConnectionFactory!');
    }

    static getConnection() {
      return new Promise((resolve, reject) => {
        let openRequest = window.indexedDB.open(dbName, version);

        openRequest.onupgradeneeded = e => {
          ConnectionFactory._createStores(e.target.result);
        };

        openRequest.onsuccess = e => {
          if (!connection) {
            connection = e.target.result;
            close = connection.close.bind(connection);
            connection.close  = function()  {
              throw new Error('Você não pode fechar essa conexão diretamente');
            }
          }
          resolve(connection);
        };

        openRequest.onerror = e => {
          console.log(e.target.error);

          reject(e.target.error.name);
        };
      });
    }

    static _createStores(connection) {
      stores.forEach(stores => {
        if (connection.objectStoreNames.contains(store)) {
          connection.deleteObjectStore(store);
        }
        connection.createObjectStore(store, { autoIncrement: true });
      });
    }

    static closeConnection(connection)  {
      if(connection)  {
        close();
        connection  = null;
      }
    }
  }
})(); 

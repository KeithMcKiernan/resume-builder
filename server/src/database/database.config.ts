export const databaseConfig = {
  mongodb: {
    host: '',
    port: '',
    dbname: '',
    domain: '',
    username: '',
    password: '',
  },
};

export const resolveConnectionUrl = () => {
  const { host, dbname, username, password, domain, port } = databaseConfig.mongodb;
  return `${host}://${username}:${password}@${domain}:${port}/${dbname}`;
};

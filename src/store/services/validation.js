const validation = data => {
  if (!(/[0-9]{5}-[\d]{3}/g).test(data)) {
    throw new Error('Informe um CEP válido');
  }
};

export default validation;

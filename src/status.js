let User = {
  usuario: 'Login',
  trocaStatus() {
    console.log('usuario trocado')
    this.usuario = 'entrou'
  }
}

export default User;
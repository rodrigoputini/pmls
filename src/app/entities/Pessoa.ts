import { Endereco } from '../entities/Endereco';
import { Artigo } from '../entities/Artigo';

export class Pessoa{
  public _id : string;
  public nome : string;
  public cpf: string;
  public rg: string;
  public apelido: string;
  public nascimento:string;
  public localNascimento:string;


  public enderecos: Endereco[];
  public artigos: Artigo[];

  constructor() {}
}

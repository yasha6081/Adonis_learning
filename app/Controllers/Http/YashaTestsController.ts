import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class YashaTestsController {
  public async index(ctx : HttpContextContract) {
    return ctx.response.json("testing json")
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

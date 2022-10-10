/**
 * Copyright (c) 2022 - Liverpool. All rights reserved
 *
 * Grupo de Asesores Profesionales en Servicios de Integración {GAPSI} - CDMX - 2022
 *
 * @author: Mauricio Aguilar Juárez [29/06/2022]
 * @updated:
 * @description: Servicios del componente Login.
 **/

export const obtainUser = async ({ email }) => {
	try {
		return {
			"code": 200,
			"description": "Logged successfully",
			"data": {
				"type": "Login",
				"username": "oadmin",
				"email": "olongino2@grupoasesores.com.mx",
				"firstName": "Oscar",
				"secondName": null,
				"lastName": "Longino",
				"maternalName": "Garduño",
				"company": "SBB",
				"forgot": null,
				"rol": {
					"type": "RolLevel",
					"name": "Administrador",
					"menus": [
						{
							"type": "Menu",
							"name": "Configuración",
							"orden": 1,
							"childs": [
								{
									"type": "Menu",
									"name": "Categorias",
									"orden": 1
								},
								{
									"type": "Menu",
									"name": "Enganches",
									"orden": 2
								},
								{
									"type": "Menu",
									"name": "Seguros",
									"orden": 3
								}
							]
						},
						{
							"type": "Menu",
							"name": "Administración",
							"orden": 2,
							"childs": [
								{
									"type": "Menu",
									"name": "Catálogos",
									"orden": 1
								},
								{
									"type": "Menu",
									"name": "Tiendas",
									"orden": 2
								},
								{
									"type": "Menu",
									"name": "Menus",
									"orden": 3
								},
								{
									"type": "Menu",
									"name": "Roles",
									"orden": 4
								},
								{
									"type": "Menu",
									"name": "Permisos",
									"orden": 5
								},
								{
									"type": "Menu",
									"name": "Propiedades",
									"orden": 6
								},
								{
									"type": "Menu",
									"name": "Etiquetas",
									"orden": 7
								},
								{
									"type": "Menu",
									"name": "Htmls",
									"orden": 8
								},
								{
									"type": "Menu",
									"name": "Aplicaciones",
									"orden": 9
								}
							]
						},
						{
							"type": "Menu",
							"name": "Usuarios",
							"orden": 3,
							"childs": [
								{
									"type": "Menu",
									"name": "Alta",
									"orden": 1
								},
								{
									"type": "Menu",
									"name": "Actualización",
									"orden": 2
								}
							]
						}
					]
				}
			}
		}
	} catch (error) {
		return 400;
	}
};

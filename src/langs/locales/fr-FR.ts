import lang from '../lang';

export default {
	name: 'Français (France)',

	messages: {
		setupCompleted: 'La configuration du serveur a été complétée. Un catégorie Modmail a été créée pour vous.',
		messageSoon: 'Vous allez bientôt recevoir un nouveau message.'
	},

	commands: {
		unsubscribe: {
			success: 'Vous vous êtes désabonné de ce fil.',
			notSubscribed: 'Vous n'êtes pas abonné à ce fil.',
			error: 'Il y a eu une erreur en vous desabonnant de ce fil.',
		},
		title: {
			success: 'Le titre a été mis à jour.',
			error: "Le titre n'as pas pu être mis à jour.",
			noTitle: 'Fournissez un titre ou écrivez `removetitle` pour retirer le titre.'
		},
		subscribe: {
			success: 'Vous allez maintenant recevoir des notifications en cas de nouvelle réponse.',
			alreadySubscribed: 'Vous suivez déjà ce fil',
			error: 'Il y a eu une erreur en vous desabonnant de ce fil.',
		},
		snippet: {
			invalidName: 'You must provide a snippet name.',
			invalidText: 'You must provide a valid snippet text.',
			takenName: 'This snippet name is already taken.',
			success: 'The snippet `%s` has been created successfully.',
			error: 'There was an error creating the snippet.',
			unknownSnippet: 'I couldn\'t find a snippet with that name.',
			updated: 'The snippet `%s` has been updated successfully.',
			deleted: 'The snippet `%s` has been deleted successfully.',
			cantDelete: 'I couldn\'t delete the snippet `%s`.',
			empty: 'There are no snippets in this server.',
			list: 'NAME | CONTENT',
			help: 'Select `create`, `edit`, `delete` or `list`.'
		},
		reply: {
			noReply: 'Vous devez fournir un message de réponse.'
		},
		rename: {
			noName: 'Vous devez fournir un nouveau nom pour le fil',
			success: 'Le fil a été renommé en `%s`.',
			error: 'Il y a eu une erreur en renommant le fil'
		},
		ping: 'Mon ping est de `%sms`.',
		nsfw: {
			enabled: 'Ce fil est maintenant maqué comme NSFW.',
			disabled: 'Ce fil n'est maintenant plus marqué comme NSFW.',
			enableError: 'Il y a eu une erreur en marquand ce fil comme NSFW.',
			disableError: 'Il y a eu une erreur en enlevant le caractère NSFW de ce fil.'
		},
		note: {
			noNote: 'Fournissez une note ou écriver `removenote` pour enlever la note.',
			success: 'La note a été mise à jour.',
			error: "La note n'as pas pu être mise à jour."
		},
		move: {
			noCategory: 'Vous devez fournir un nom de catégorie.',
			notFound: 'Je n\'ai pas pu trouver une catégorie avec ce nom.',
			alreadyInCategory: 'Ce fil est déjà dans cette catégorie.',
			noPermission: 'Je n\'ai pas la permission de bouger ce fil dans cette catégorie.',
			success: 'Le fil a été bougé en `%s`.',
			error: 'Il y a eu une erreur en bougeant ce fil.'
		},
		help: {
			title: 'ModMail par ThePhoDit',
			description: 'ModMail est un bot discord qui vous permet dec communiquer avec vos utilisateurs à l\'aide de vos DMs.\nSi vous voulez voir les commandes du bot lisez les documentations sur https://modmail.phodit.xyz',
		},
		edit: {
			noMessage: 'Vous devez fournir un id de message.',
			noContent: 'Vous devez fournir un nouveau contenu pour ce message.',
			notFound: 'Je n\'ai pas pu trouver un message avec cet id.',
			success: 'Le message a bien été édité.',
			error: 'Il y a eu une erreur en éditant le message.'
		},
		delete: {
			noMessage: 'Vous devez fournir un id de message.',
			notFound: 'Je n\'ai pas pu trouver un message avec cet id.',
			success: 'Le message a bien été supprimé.',
			error: 'Il y a eu une erreur en supprimant le message'
		},
		contact: {
			noUser: 'Vous devez mentionner un utilisateur ou utiliser son ID.',
			notFound: 'Je n\'ai pas pu trouver un utilisateur avec cet ID.',
			isBot: 'Vous ne pouvez pas contacter un bot.',
			channelError: 'Il y a eu une erreur en créant le channel.',
			DMError: 'Il y a eu une erreur en envoyant le DM.',
			alreadyContacted: 'Vous avez déjà un fil avec cet utilisateur.',
			success: 'Le fil a bien été créé.',
			message: 'Bonjour %s, ceci est un fil ModMail créé par %m. Vous pouvez répondre à ce message pour envoyer un message au staff du serveur.',
			error: 'Il y a eu une erreur en créant le fil'
		},
		close: {
			invalidTime: 'Vous devez fournir un temps valide (entre 10 minutes et 3 jours).',
			closerError: 'Il y a eu une erreur en programmant la fermeture du fil.',
			closerUpdateError: 'Il y a eu une erreur en modifiant le temps de fermeture du thread.',
			title: 'Fermeture prévue.',
			description: 'Ce fil sera fermé le `%s` si aucune réponse n'est envoyée.'
		},
		category: {
			noCategory: 'vous devez fournir un nom de catégorie.',
			exists: 'Une catégorie avec ce nom existe déjà.',
			notFoundID: 'Je n\'ai pas pu trouver une catégorie avec cet ID.',
			notFoundName: 'Je n\'ai pas de catégorie avec ce nom.',
			created: 'La catégorie a bien été créée.',
			createdError: 'Il y a eu une erreur en créant la catégorie.',
			deleted: 'La catégorie a bien été supprimée.',
			deletedError: 'Il y a eu une erreur en supprimant la catégorie.',
			empty: 'Je n\'ai pas pu trouver de catégorie sur ce serveur.',
			list: 'NOM | CATEGORIE',
			help: 'Selectionnez `create`, `delete` ou `list`.'
		},
		blacklist: {
			noOption: 'Vous devez fournir une option (`add` ou `remove`).',
			noUser: 'Vous devez fournir une mention ou un ID.',
			notFound: 'Je n\'ai pas pu trouver d'utilisateur avec cet ID.',
			alreadyBlacklisted: 'Cet utilisateur est déjà blacklisté.',
			notBlacklisted: 'Cet utilisateur n\'est pas blacklisté.',
			blacklisted: 'Cet utilisateur a bien été blacklisté.',
			unblacklisted: 'Cet utilisateur a bien été retiré de la blacklist.',
			error: 'Il y a eu une erreur en mettant à jour la blacklist.'
		},
		alias: {
			noOption: 'Vous devez fournir une option (`add` ou `remove`).',
			noName: 'Vous devez fournir une abbréviation.',
			reservedAlias: 'Cette abbréviation est reservée.',
			noCommand: 'Vous devez fournir une commande à abbrévier.',
			invalidCommand: 'Cette commande n\'existe pas.',
			alreadyExists: 'Une abbréviation avec ce nom existe déjà.',
			created: 'L\'abbréviation a bien été créée',
			createdError: 'Il y a eu une erreur en crééant l\abbréviation.',
			unknownAlias: 'Je n\'ai pas pu trouver d'abbréviation avec ce nom.',
			deleted: 'L\'abbréviation a bien été supprimée.',
			deletedError: 'Il y eu une erreur en mettant à jour l\'abbréviation.',
		},
		permission: {
			noLevel: 'S\'il vous plaît, selectionnez le niveau d'autorisation de la commande.\nNiveau: **regular**, **support** et **admin**.\nUsage: %ppermission {levelName/commandName} {add/remove} {role ID/user ID}',
			noOption: 'Vous devez fournir une option (`add` ou `remove`).',
			noID: 'Vous devez fournir un role ou un id d\'username.',
			alreadyExists: 'Ce role ou cet utilisateur a déjà ce niveau de permission.',
			notExists: 'Ce role ou cet utilisateur n\'a pas le niveau de permission necessaire.',
			added: 'La permission a bien été ajoutée.',
			addedError: 'Il y a eu une erreur en ajoutant la permission.',
			removed: 'La permission a bien été retirée.',
			removedError: 'Il y a eu un erreur en retirant la permission.',
			unknownCommand: 'Je n\'ai pas pu trouver de commande avec ce nom.',
		},
		set: {
			title: 'Paramètre du bot que vous pouvez changer.',
			description: `
			\`avatar\`: attacher une image pour changer l\'avator du bot.
			\`username\`: change le nom d\'utilisateur du bot, pas son pseudonyme.
			\`prefix\`: change le prefixe du bot (longueur max: 4).
			\`category\`: Envoyez l\'ID du channel où vous voulez que les fils soient ouverts.
			\`logs\`: Envoyez l\'ID du channel où vous voulez que les logs soient envoyés.
			\`status\`: change le status du bot.
			\`status_type\`: change le type de status du bot.
			\`notification\`: Envoyez l\'ID du role qui doit être mentionné lors du la création d\'un fil.
			\`account_age\`: l\'âge du compte necessaire pour ouvrir un fil.
			\`guild_age\`: le temps necessaire sur le serveur pour ouvrir un fil.
			\`guild_age_id\`: Le serveur ID où l'utilisateur doit y avoir passé un temps : **guild_age**.
			\`exclude_internal_logs\`: Arrête les logs de tous les messages internes : peut être true ou false.
			\`embed_creation_title\`: Le titre de l\'embed envoyé à l'utilisateur lorsque le fil est ouvert.
			\`embed_creation_thumbnail\`: le thumbnail de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert ("none" pour le désactiver).
			\`embed_creation_description\`: La description de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert.
			\`embed_creation_color\`: la couleur (hex code) de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert.
			\`embed_creation_footer_text\`: le bas de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert.
			\`embed_creation_footer_image\`: l\'image de footer de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert.
			\`embed_contact_title\`: le titre de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert par un membre du staff.
			\`embed_contact_thumbnail\`: le thumbnail de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert par un membre du staff ("none" pour désactiver).
			\`embed_contact_description\`: la description de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert par un membre du staff..
			\`embed_contact_color\`: la couleur (hex code) de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert par un membre du staff..
			\`embed_contact_footer_text\`: le footer de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert par un membre du staff..
			\`embed_contact_footer_image\`: l\'image du footer de l\'embed envoyé à l\'utilisateur lorsque le fil est ouvert par un membre du staff..
			\`embed_reply_color\`: la couleur (hex code) de l\'embed envoyé au staff lorsque un membre du staff répond à l\'utilisateur.
			\`embed_userReply_color\`: La couleur (hex code) de l\'embed envoyé à l\'utilisateur lorsque un membre du staff lui répond.
			\`embed_userReply_footer_text\`: le footer de l\'embed envoyé à l\'utilisateur lorsque un membre du staff lui répond (\`$role$\` sera remplacé par le plus haut role du staff).
			\`embed_userReply_footer_image\`: l\'image footer de l\'embed envoyé à l\'utilisateur lorsque un membre du staff lui répond.
			\`embed_closure_title\`: Le titre de l\'embed envoyé à l\'utilisateur lorsque le fil est fermé.
			\`embed_closure_thumbnail\`: le thumbnail de l\'embed envoyé à l\'utilisateur lorsque le fil est fermé ("none" pour désactiver).
			\`embed_closure_description\`: la description de l\'embed envoyé à l\'utilisateur lorsque le fil est fermé.
			\`embed_closure_color\`: la couleur (hex code) de l\'embed envoyé à l\'utilisateur lorsque le fil est fermé.
			\`embed_closure_footer_text\`: le footer de l\'embed envoyé à l\'utilisateur lorsque le fil est fermé.
			\`embed_closure_footer_image\`: l\'image footer de l\'embed envoyé à l\'utilisateur lorsque le fil est fermé.
			\`embed_staff_title\`: le titre de l\'embed envoyé au staff lorsque le fil est ouvert.
			\`embed_staff_color\`: La couleur (hex code) de l\'embed envoyé au staff lorsque le fil est ouvert.`,
			usage: {
				title: 'Usage',
				description: '%pset {setting} {value}',
			},
			noValue: 'Vous devez fournir une valeur.',
			noImage: 'vous devez fournir une image.',
			avatar: {
				error: 'Il y a eu une erreur en changeant l\'avatar du bot.',
				success: 'L\'avatar du bot a bien été changé.',
			},
			unknownError: 'Il y a eu une erreur en changeant les paramètres du bot.',
			usernameSuccess: 'Le pseudo du bot a bien été changé.',
			prefix: {
				success: 'Le préfixe du bot a bien été changé.',
				error: 'Le préfixé du bot doit être entre 1 et 4 caractères.',
				unknownError: 'Il y a eu une erreur en changeant le préfixe du bot.',
			},
			category: {
				success: 'La catégorie du bot a bien été changée',
				error: 'La catégorie du bot doit être une ID valide.',
				unknownError: 'Il y a eu une erreur en changeant la catégorie.',
			},
			logs: {
				success: 'Le channel des logs du bot a bien été changé.',
				error: 'Le channel des logs du bot doit être un ID de channel valide.',
				unknownError: 'Il y a eu une erreur en changeant le channel de log du bot.',
			},
			status: {
				success: 'Le status du bot a bien été changé.',
				unknownError: 'Il y a eu une erreur en changeant le status du bot.',
			},
			statusType: {
				success: 'Le type status du bot a bien été changé.',
				unknownError: 'Il y a eu une erreur en changeant le type de status du bot.',
				invalidTwitch: 'l\'URL doit être une URL Twitch ou Youtube valide',
				help: 'Le type de status doit être une des suivants : `playing`, `streaming`, `listening`, `watching`.',
			},
			accountAge: {
				invalidFormat: 'You have to select a valid format. For example, 1d = 1 day / 30m = 30 minutes. To disable it, just type `0`.\nValid letters: m / h / d / w / y',
				success: 'The account age restriction has been changed successfully.',
				unknownError: 'There was an error changing the account age restriction.',
			},
			guildAge: {
				invalidGuild: 'Je ne suis pas sur ce serveur selectionnez s\'il vous plaît un serveur sur lequel je me trouve.',
				success: 'The guild age ID has been changed successfully.',
				unknownError: 'There was an error changing the guild age ID.',
			},
			notification: {
				success: 'Le role à notifier a bien été changé.',
				unknownError: 'Il y a eu une erreur en changeant le role à notifier.',
			},
			excludeInternalLogs: {
				isExcluded: 'Les logs internes seront maintenant exclus.',
				isIncluded: 'Les logs internes seront maintenant inclus',
				unknownError: 'Il y a eu une erreur en changeant les logs.',
			},
			embedCreation: {
				success: (iin) => `La création de l\'embed ${iin} a bien été changé.`,
				unknownError: (iin) => `Il y a eu une erreur en changeant la création d\'embed de ${iin}.`,
			},
			embedContact: {
				success: (iin) => `L\'embed de contact ${iin} a bien été changé.`,
				unknownError: (iin) => `Il y a eu une erreur en changant l\'embed de contact de ${iin}.`,
			},
			embedReply: {
				success: (iin) => `l\'embed de réponse ${iin} a bien été changé.`,
				unknownError: (iin) => `il y a eu une erreur en changeant l\'embed de ${iin}.`,
			},
			embedUserReply: {
				success: (iin) => `l'\embed de réponse utilisateur ${iin} a bien été changé.`,
				unknownError: (iin) => `Il y a eu une erreur en changeant l\'embed de réponse ${iin}.`,
			},
			embedClosure: {
				success: (iin) => `L\'embed de fin ${iin} a bien été changé.`,
				unknownError: (iin) => `Il y a eu une erreur en changeant l\'embed de fin ${iin}.`,
			},
			embedStaff: {
				success: (iin) => `L\'embed staff ${iin} a bien été changé`,
				unknownError: (iin) => `Il y a eu une erreur en changeant l\'embed staff ${iin}.`,
			},
		}
	},

	embeds: {
		noContent: 'Pas de contenu fourni.',
		files: 'Fichier',
		containsFiles: 'Ce message contient %n file%s',
		closureCancelled: {
			title: 'Fermeture annulée.',
			description: 'Ce ticket ne sera plus fermée pour cause d\'inactivité.',
		},
		threadClosed: {
			title: 'Fil fermé.',
			description: 'Le fil de `%u` a été fermé par %s',
		},
		staffReply: 'Réponse du staff',
		user: 'User',
		pastThreads: 'Fils précédents'
	},

	errors: {
		categoryCreate: 'Une catégorie n\'a pas pu être créée. Configuration annulée.',
		configAdd: 'La configuration n'\a pas pu être ajoutée à la database. Configuration annulée.',
		accountAge: 'Votre compte n\'est pas assez vieu pour contacter le staff.',
		serverAge: 'Votre compte n\'est pas sur le serveur depuis assez longtemps pour contacter le staff.',
		unknown: 'Une erreur inconnue s\'est produite. Essayez plus tard.',
		contactStaff: 'Votre message n\'a pas pu être envoyer au staff.',
		invalidPermissions: 'Vous n\'avez pas la permission requise pour utiliser cette commande.',
		snippet: 'Une erreur s\'est produite en essayant de récupérer le snippet',
		noLogsUrl: 'vous n\'avez pas de log d\'URL configuré',
		noUserIDProvided: 'Vous devez fournir un ID d\'user valide.',
		noLogsFound: 'Je n\'ai pas pu trouver de log pour cet utilisateur.',
		invalidHexColor: 'Vous devez fournir un couleur hex valide.',
		invalidLink: 'Vous devez fournir un lien valide',
	}
} as lang;

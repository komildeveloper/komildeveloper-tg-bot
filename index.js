import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const bot = new TelegramBot(process.env.TOKEN, {
	polling: true
})

bot.onText(/\/start/, msg => {
	const { id, first_name } = msg.from

	bot.sendMessage(id, `Assalomu Aleykum ${first_name}, xush kelibsiz`, {
		reply_markup: JSON.stringify({
			keyboard: [
				[
					{
						text: 'Kamina haqida 🧑🏻‍💻'
					},
					{
						text: 'Video Darslar 🎞️'
					}
				],
				[
					{
						text: 'Web Sayt 🌐'
					}
				]
			],
			resize_keyboard: true
		})
	})
})

bot.on('message', msg => {
	const { id, first_name } = msg.chat

	if (msg.text === 'Kamina haqida 🧑🏻‍💻') {
		bot.sendPhoto(id, './img/me.jpeg', {
			caption: `
        <strong>Ism:</strong> Komil \n<strong>Familya:</strong> Sobitov \n<strong>Tug'ilgan sana:</strong> 2001.10.07 \n<a href="https://github.com/komildeveloper">Github Account</a> \n<strong>Hobby:</strong> <i>Football, Coding, Traveling</i> \n\n<span class="tg-spoiler">Liverpool FC ashaddiy muxlisi</span>
      `,
			parse_mode: 'HTML',
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: 'Github 💻',
							url: 'https://github.com/komildeveloper'
						},
						{
							text: 'Twitter 🐦',
							url: 'https://twitter.com/komil_developer'
						}
					],
					[
						{
							text: 'Instagram 📸',
							url: 'https://instagram.com/komil_developer'
						},
						{
							text: 'YouTube 📽️',
							url: 'https://www.youtube.com/channel/UC4XCFTMdAcXpkmqcGiVNXTQ'
						}
					]
				],
				resize_keyboard: true
			}
		})
	}

	if (msg.text === 'Ortga ⬅️') {
		bot.sendMessage(id, `${first_name} ortga qoytdingiz`, {
			reply_markup: JSON.stringify({
				keyboard: [
					[
						{
							text: 'Kamina haqida 🧑🏻‍💻'
						},
						{
							text: 'Video Darslar 🎞️'
						}
					],
					[
						{
							text: 'Web Sayt 🌐'
						}
					]
				],
				resize_keyboard: true
			})
		})
	}

	if (msg.text === 'Video Darslar 🎞️') {
		bot.sendPhoto(id, './img/banner.png', {
			caption: `
        <strong>Kaminaning Video-Darslari shu yerda</strong> \n\n<a href="https://www.youtube.com/watch?v=lq4w0-p_S64&list=PLncVsPbQ32Z39ugqR8WYLkYbQ0Mt1hCFq">Vim</a> \n<a href="https://www.youtube.com/watch?v=ldt0SXJUfO4&list=PLncVsPbQ32Z1NSgO8I1aIAONgsHYAw3GS">Neovim</a> \n<a href="https://www.youtube.com/watch?v=YnwbTwdvP4k&list=PLncVsPbQ32Z2lY3QcsCY0h9h-toDKfCxe">Tmux</a>
      `,
			parse_mode: 'HTML',
			reply_markup: {
				inline_keyboard: [
					[
						{
							text: 'Vim',
							url: 'https://www.youtube.com/watch?v=lq4w0-p_S64&list=PLncVsPbQ32Z39ugqR8WYLkYbQ0Mt1hCFq'
						},
						{
							text: 'Neovim',
							url: 'https://www.youtube.com/watch?v=ldt0SXJUfO4&list=PLncVsPbQ32Z1NSgO8I1aIAONgsHYAw3GS'
						}
					],
					[
						{
							text: 'Tmux',
							url: 'https://www.youtube.com/watch?v=YnwbTwdvP4k&list=PLncVsPbQ32Z2lY3QcsCY0h9h-toDKfCxe'
						}
					]
				]
			}
		})
	}

	if (msg.text === 'Web Sayt 🌐') {
		bot.sendMessage(id, 'Web Sayt 🌐: komildeveloper.vercel.app')
	}
})

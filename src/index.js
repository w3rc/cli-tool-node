#! /usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const existingConfig = fs.existsSync('now.json');

// const questions = [];

const buildConfig = () => {
	inquirer
	.prompt([
		{
			type: 'text',
			name: 'name',
			message: 'Name of the project',
			default: path.basename(process.cwd())
			},
			{
				type: 'list',
				name: 'type',
				message: 'Type of the project?',
				choices: ['react', 'angular', 'svelte']
			}
		])
		.then((ans) => {
			fs.writeFile(path.join(process.cwd(), 'new.txt'), process.argv)
			console.log(ans);
			console.log('=======');
		});
};

if (existingConfig) {
	inquirer
		.prompt([
			{
				type: 'confirm',
				name: 'overwrite',
				message: 'now.json already exists. Overwrite?',
				default: false
			}
		])
		.then((ans) => {
			console.log(ans);
			if (ans.overwrite) {
				buildConfig();
			} else {
				console.log('Exiting tool...');
			}
		});
} else {
	buildConfig();
}


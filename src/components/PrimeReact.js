import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const items = [
	{
		label: 'PrimeReact',
	},
	{
		label: 'File',
		icon: 'pi pi-fw pi-file',
		items: [
			{
				label: 'New',
				icon: 'pi pi-fw pi-plus',
				items: [
					{
						label: 'Bookmark',
						icon: 'pi pi-fw pi-bookmark',
					},
					{
						label: 'Video',
						icon: 'pi pi-fw pi-video',
					},
				],
			},
			{
				label: 'Delete',
				icon: 'pi pi-fw pi-trash',
			},
			{
				separator: true,
			},
			{
				label: 'Export',
				icon: 'pi pi-fw pi-external-link',
			},
		],
	},
	{
		label: 'Edit',
		icon: 'pi pi-fw pi-pencil',
		items: [
			{
				label: 'Left',
				icon: 'pi pi-fw pi-align-left',
			},
			{
				label: 'Right',
				icon: 'pi pi-fw pi-align-right',
			},
			{
				label: 'Center',
				icon: 'pi pi-fw pi-align-center',
			},
			{
				label: 'Justify',
				icon: 'pi pi-fw pi-align-justify',
			},
		],
	},
	{
		label: 'Users',
		icon: 'pi pi-fw pi-user',
		items: [
			{
				label: 'New',
				icon: 'pi pi-fw pi-user-plus',
			},
			{
				label: 'Delete',
				icon: 'pi pi-fw pi-user-minus',
			},
			{
				label: 'Search',
				icon: 'pi pi-fw pi-users',
				items: [
					{
						label: 'Filter',
						icon: 'pi pi-fw pi-filter',
						items: [
							{
								label: 'Print',
								icon: 'pi pi-fw pi-print',
							},
						],
					},
					{
						icon: 'pi pi-fw pi-bars',
						label: 'List',
					},
				],
			},
		],
	},
	{
		label: 'Events',
		icon: 'pi pi-fw pi-calendar',
		items: [
			{
				label: 'Edit',
				icon: 'pi pi-fw pi-pencil',
				items: [
					{
						label: 'Save',
						icon: 'pi pi-fw pi-calendar-plus',
					},
					{
						label: 'Delete',
						icon: 'pi pi-fw pi-calendar-minus',
					},
				],
			},
			{
				label: 'Archieve',
				icon: 'pi pi-fw pi-calendar-times',
				items: [
					{
						label: 'Remove',
						icon: 'pi pi-fw pi-calendar-minus',
					},
				],
			},
		],
	},
	{
		label: 'Quit',
		icon: 'pi pi-fw pi-power-off',
	},
];
export default class PrimeReact extends Component {
	render() {
		const start = <Button label="PrimeReact" className="p-button-warning" />;
		const end = <Button label="PrimeReact" className="p-button-warning" />;
		return (
			<div>
				<Menubar
					style={{ fontSize: '1rem' }}
					model={items}
					start={start}
					end={end}
				>
					<Button label="Logout" className="p-button-warning" />
				</Menubar>
				<p className="description">
					Can't figure out the "start" template, but otherwise very powerful.
					Items come from JSON array.
				</p>
			</div>
		);
	}
}

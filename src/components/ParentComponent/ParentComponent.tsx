import React from 'react'
import ParamEditor from '../ParamEditor/ParamEditor'

interface Param {
	id: number
	name: string
	type:  "text" | "number" | "select"
	options?: string[]
}

interface ParamValue {
	paramId: number
	value: string
}

interface Color {
	colorId: number
	value: string
}

interface Model {
	paramValues: ParamValue[]
	colors: Color[]
}

class ParentComponent extends React.Component {
	params: Param[] = [
		{
			id: 1,
			name: 'Назначение',
			type: "text",
		},
		{
			id: 2,
			name: 'Длина',
			type: "text",
		},
	]

	model: Model = {
		paramValues: [
			{
				paramId: 1,
				value: 'повседневное',
			},
			{
				paramId: 2,
				value: 'макси',
			},
		],
		colors: [
			{
				colorId: 1,
				value: 'красный',
			},
		],
	}

	render() {
		return <ParamEditor params={this.params} model={this.model} />
	}
}

export default ParentComponent

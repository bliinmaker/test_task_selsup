import React from 'react'
import ParamEditor from '../ParamEditor/ParamEditor'

const ParentComponent = () => {
	const params = [
		{
			id: 1,
			name: 'Назначение',
			type: 'string',
		},
		{
			id: 2,
			name: 'Длина',
			type: 'string',
		},
	]

	const model = {
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
	}

	return (
		<ParamEditor params={params} model={model} />
	)
}

export default ParentComponent

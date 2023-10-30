import React, { useState } from 'react'
import './ParamEditor.sass'

interface Param {
	id: number
	name: string
}

interface ParamValue {
	paramId: number
	value: string
}

interface Model {
	paramValues: ParamValue[]
}

interface Props {
	params: Param[]
	model: Model
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
	const [paramValues, setParamValues] = useState<ParamValue[]>(
		model?.paramValues || []
	)

	const getModel = (): Model => {
		return {
			paramValues: paramValues,
		}
	}

	const handleParamValueChange = (paramId: number, value: string) => {
		setParamValues(
			paramValues.map(pv => (pv.paramId === paramId ? { ...pv, value } : pv))
		)
	}

	return (
		<div className='param-editor'>
			{params?.map(param => (
				<div className='input-wrapper' key={param.id}>
					<label>{param.name}</label>
					<div className='name'>
						<input
							type='text'
							value={
								paramValues.find(pv => pv.paramId === param.id)?.value || ''
							}
							onChange={e => handleParamValueChange(param.id, e.target.value)}
						/>
					</div>
				</div>
			))}
			<button onClick={() => console.log(getModel())}>Изменить</button>
		</div>
	)
}

export default ParamEditor

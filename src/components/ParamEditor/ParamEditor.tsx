import React, { ChangeEvent } from 'react'
import './ParamEditor.sass'

interface Param {
	id: number
	name: string
	type: 'text' | 'number' | 'select'
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

interface Props {
	params: Param[]
	model: Model
}

class ParamEditor extends React.Component<Props, Model> {
	constructor(props: Props) {
		super(props)
		this.state = { ...props.model }
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps.model !== this.props.model) {
			this.setState({ ...this.props.model })
		}
	}

	handleParamValueChange(paramId: number, newValue: string) {
		this.setState({
			...this.state,
			paramValues: this.state.paramValues.map(paramValue =>
				paramValue.paramId === paramId
					? { ...paramValue, value: newValue }
					: paramValue
			),
		})
	}

	public getModel(): Model {
		return { ...this.state }
	}

	render() {
		return (
			<div className='param-editor'>
				{this.props.params?.map(param => (
					<div className='input-wrapper' key={param.id}>
						<label>{param.name}</label>
						<div className='name'>
							{param.type === 'select' ? (
								<select
									value={
										this.state.paramValues.find(
											paramValue => paramValue.paramId === param.id
										)?.value || ''
									}
									onChange={(e: ChangeEvent<HTMLSelectElement>) =>
										this.handleParamValueChange(param.id, e.target.value)
									}
								>
									{param.options?.map(option => (
										<option value={option}>{option}</option>
									))}
								</select>
							) : (
								<input
									type={param.type}
									value={
										this.state.paramValues.find(
											paramValue => paramValue.paramId === param.id
										)?.value || ''
									}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										this.handleParamValueChange(param.id, e.target.value)
									}
								/>
							)}
						</div>
					</div>
				))}
				<button onClick={() => console.log(this.getModel())}>Изменить</button>
			</div>
		)
	}
}

export default ParamEditor

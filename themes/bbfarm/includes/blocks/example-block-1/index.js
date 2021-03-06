/**
 * Example-block-1
 * Custom title block -- feel free to delete
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;

/**
 * Register block
 */
export default registerBlockType(
	'tenup/example-block',
	{
		title: __( 'My first block', 'bbfarm' ),
		description: __( 'My first block description', 'bbfarm' ),
		icon: 'smiley',
		category: 'bbfarm-blocks',
		keywords: [
			__( 'example', 'bbfarm' ),
		],
		attributes: {
			customTitle: {
				type: 'string'
			},
		},
		/**
		 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
		 */
		edit: props => {
			const {
				attributes: {
					customTitle
				},
				className,
				setAttributes,
				isSelected
			} = props;

			if ( isSelected ) {
				return (
					<div className={ className }>
						<TextControl
							id="example-block-text-field"
							label={ __( 'Custom Title', 'bbfarm' ) }
							value={ customTitle }
							onChange={ customTitle => setAttributes( { customTitle } ) }
						/>
					</div>
				);
			} else {
				return (
					<h2 class="example-block-title">
						{ customTitle }
					</h2>
				);
			}
		},
		/**
		 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#save
		 */
		save: props => {
			const {
				customTitle
			} = props.attributes;

			return (
				<h2 class="example-block-title">
					{ customTitle }
				</h2>
			);
		},
	},
);

<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2015.0.0.309
*/

require_once('recaptchalib.php');
require_once('form_process.php');

$form = array(
	'subject' => 'Fit Online Submission',
	'heading' => 'New Form Submission',
	'success_redirect' => '',
	'resources' => array(
		'checkbox_checked' => 'Selected',
		'checkbox_unchecked' => 'Unselected',
		'submitted_from' => 'Form submitted from website: %s',
		'submitted_by' => 'Visitor IP address: %s',
		'too_many_submissions' => 'Too many recent submissions from this IP',
		'failed_to_send_email' => 'Failed to send email',
		'invalid_reCAPTCHA_private_key' => 'Invalid reCAPTCHA private key.',
		'invalid_field_type' => 'Unknown field type \'%s\'.',
		'invalid_form_config' => 'Field \'%s\' has an invalid configuration.',
		'unknown_method' => 'Unknown server request method'
	),
	'email' => array(
		'from' => 'fitri.xiii@gmail.com',
		'to' => 'fitri.xiii@gmail.com'
	),
	'recaptcha' => array(
		'private_key' => '6Ldc9xMTAAAAAHFI_atDo-ZUok_XvXAeDUK24cfq'
	),
	'fields' => array(
		'custom_U1162' => array(
			'order' => 1,
			'type' => 'string',
			'label' => 'Name',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Name\' is required.'
			)
		),
		'Email' => array(
			'order' => 2,
			'type' => 'email',
			'label' => 'Email',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Email\' is required.',
				'format' => 'Field \'Email\' has an invalid email address.'
			)
		),
		'custom_U1186' => array(
			'order' => 4,
			'type' => 'string',
			'label' => 'Message',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Message\' is required.'
			)
		),
		'custom_U1177' => array(
			'order' => 3,
			'type' => 'string',
			'label' => 'Website',
			'required' => false,
			'errors' => array(
			)
		),
		'recaptcha_response_field' => array(
			'order' => 5,
			'type' => 'recaptcha',
			'label' => 'Image Verification',
			'required' => true,
			'errors' => array(
				'required' => 'Field \'Image Verification\' is required.',
				'format' => 'Incorrect reCAPTCHA value.'
			)
		)
	)
);

process_form($form);
?>

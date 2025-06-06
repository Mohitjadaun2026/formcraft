import { FormTemplate } from '../types';

export const templates: FormTemplate[] = [
  {
    id: 'contact-us',
    title: 'Contact Us',
    description: 'A simple contact form for your website',
    fields: [
      {
        id: 'name',
        type: 'text',
        label: 'Full Name',
        placeholder: 'Enter your full name',
        required: true,
        helpText: 'Please enter your first and last name',
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email address',
        required: true,
        helpText: 'We\'ll never share your email with anyone else',
      },
      {
        id: 'phone',
        type: 'phone',
        label: 'Phone Number',
        placeholder: 'Enter your phone number',
        required: false,
      },
      {
        id: 'subject',
        type: 'text',
        label: 'Subject',
        placeholder: 'What is this regarding?',
        required: true,
      },
      {
        id: 'message',
        type: 'textarea',
        label: 'Message',
        placeholder: 'Enter your message',
        required: true,
        helpText: 'Please provide as much detail as possible',
      },
    ],
  },
  {
    id: 'survey',
    title: 'Customer Satisfaction Survey',
    description: 'Gather feedback from your customers',
    fields: [
      {
        id: 'name',
        type: 'text',
        label: 'Your Name',
        placeholder: 'Enter your name',
        required: false,
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email address',
        required: false,
      },
      {
        id: 'satisfaction',
        type: 'radio',
        label: 'How satisfied are you with our service?',
        required: true,
        options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
      },
      {
        id: 'recommend',
        type: 'radio',
        label: 'How likely are you to recommend us to a friend?',
        required: true,
        options: ['Very Likely', 'Likely', 'Neutral', 'Unlikely', 'Very Unlikely'],
      },
      {
        id: 'improvements',
        type: 'checkbox',
        label: 'What areas could we improve? (Select all that apply)',
        required: false,
        options: ['Customer Service', 'Product Quality', 'Website Experience', 'Pricing', 'Communication', 'Other'],
      },
      {
        id: 'comments',
        type: 'textarea',
        label: 'Additional Comments',
        placeholder: 'Please share any additional feedback',
        required: false,
      },
    ],
  },
  {
    id: 'job-application',
    title: 'Job Application',
    description: 'A form for job applicants',
    fields: [
      {
        id: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter your first name',
        required: true,
      },
      {
        id: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        required: true,
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email address',
        required: true,
      },
      {
        id: 'phone',
        type: 'phone',
        label: 'Phone Number',
        placeholder: 'Enter your phone number',
        required: true,
      },
      {
        id: 'position',
        type: 'dropdown',
        label: 'Position Applied For',
        required: true,
        options: ['Software Developer', 'Product Manager', 'UX Designer', 'Marketing Specialist', 'Sales Representative', 'Other'],
      },
      {
        id: 'experience',
        type: 'number',
        label: 'Years of Experience',
        placeholder: 'Enter number of years',
        required: true,
      },
      {
        id: 'resume',
        type: 'file',
        label: 'Resume/CV',
        required: true,
        helpText: 'Please upload your resume in PDF format',
      },
      {
        id: 'coverletter',
        type: 'textarea',
        label: 'Cover Letter',
        placeholder: 'Tell us why you\'re a good fit for this position',
        required: false,
      },
      {
        id: 'startDate',
        type: 'date',
        label: 'Available Start Date',
        required: true,
      },
    ],
  },
  {
    id: 'event-registration',
    title: 'Event Registration',
    description: 'Register attendees for your event',
    fields: [
      {
        id: 'name',
        type: 'text',
        label: 'Full Name',
        placeholder: 'Enter your full name',
        required: true,
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email address',
        required: true,
        helpText: 'We\'ll send the event details to this email',
      },
      {
        id: 'ticketType',
        type: 'radio',
        label: 'Ticket Type',
        required: true,
        options: ['General Admission', 'VIP', 'Early Bird'],
      },
      {
        id: 'attendees',
        type: 'number',
        label: 'Number of Attendees',
        placeholder: 'Enter number',
        required: true,
      },
      {
        id: 'dietaryRestrictions',
        type: 'checkbox',
        label: 'Dietary Restrictions',
        required: false,
        options: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut Allergy', 'None'],
      },
      {
        id: 'specialRequests',
        type: 'textarea',
        label: 'Special Requests',
        placeholder: 'Any special accommodations needed?',
        required: false,
      },
    ],
  },
  {
    id: 'company-registration',
    title: 'Company Registration',
    description: 'Register a new company in our system',
    fields: [
      {
        id: 'companyName',
        type: 'text',
        label: 'Company Name',
        placeholder: 'Enter company name',
        required: true,
      },
      {
        id: 'businessType',
        type: 'dropdown',
        label: 'Business Type',
        required: true,
        options: ['Sole Proprietorship', 'Partnership', 'Corporation', 'LLC', 'Non-Profit', 'Other'],
      },
      {
        id: 'contactPerson',
        type: 'text',
        label: 'Primary Contact Person',
        placeholder: 'Enter name',
        required: true,
      },
      {
        id: 'email',
        type: 'email',
        label: 'Business Email',
        placeholder: 'Enter business email',
        required: true,
      },
      {
        id: 'phone',
        type: 'phone',
        label: 'Business Phone',
        placeholder: 'Enter business phone',
        required: true,
      },
      {
        id: 'address',
        type: 'text',
        label: 'Business Address',
        placeholder: 'Enter business address',
        required: true,
      },
      {
        id: 'city',
        type: 'text',
        label: 'City',
        placeholder: 'Enter city',
        required: true,
      },
      {
        id: 'state',
        type: 'text',
        label: 'State/Province',
        placeholder: 'Enter state/province',
        required: true,
      },
      {
        id: 'zipCode',
        type: 'text',
        label: 'ZIP/Postal Code',
        placeholder: 'Enter ZIP/postal code',
        required: true,
      },
      {
        id: 'country',
        type: 'dropdown',
        label: 'Country',
        required: true,
        options: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Other'],
      },
      {
        id: 'taxId',
        type: 'text',
        label: 'Tax ID/EIN',
        placeholder: 'Enter tax ID or EIN',
        required: true,
      },
    ],
  },
  {
    id: 'feedback-form',
    title: 'Event Feedback',
    description: 'Collect feedback from event attendees',
    fields: [
      {
        id: 'name',
        type: 'text',
        label: 'Your Name',
        placeholder: 'Enter your name',
        required: false,
        helpText: 'You can submit anonymously if preferred',
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email address',
        required: false,
      },
      {
        id: 'eventRating',
        type: 'rating',
        label: 'How would you rate the overall event?',
        required: true,
      },
      {
        id: 'speakerRating',
        type: 'rating',
        label: 'How would you rate the speakers/presenters?',
        required: true,
      },
      {
        id: 'venueRating',
        type: 'rating',
        label: 'How would you rate the venue and facilities?',
        required: true,
      },
      {
        id: 'bestPart',
        type: 'textarea',
        label: 'What did you like most about the event?',
        placeholder: 'Please share your thoughts',
        required: false,
      },
      {
        id: 'improvements',
        type: 'textarea',
        label: 'What could we improve for future events?',
        placeholder: 'Please share your suggestions',
        required: false,
      },
      {
        id: 'futureTopics',
        type: 'textarea',
        label: 'What topics would you like to see at future events?',
        placeholder: 'Please share your interests',
        required: false,
      },
      {
        id: 'attendFuture',
        type: 'radio',
        label: 'Would you attend our events in the future?',
        required: true,
        options: ['Definitely', 'Probably', 'Not Sure', 'Probably Not', 'Definitely Not'],
      },
    ],
  },
  {
    id: 'custom-form',
    title: 'Blank Form',
    description: 'Start with a blank slate',
    fields: [],
  },
];
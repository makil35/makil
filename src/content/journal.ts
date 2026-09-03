export interface JournalBlock {
  heading?: string;
  paragraphs: string[];
}

export interface JournalArticle {
  slug: string;
  title: string;
  /** Shown in listings and used as the meta description. */
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  date: string; // ISO
  readingTime: string;
  kicker: string;
  blocks: JournalBlock[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "what-a-private-adviser-actually-does",
    title: "What a private adviser actually does",
    kicker: "Private advisory",
    excerpt:
      "A private adviser is not a concierge and not an agency. It is one point of contact, one judgement, and a very short list of people.",
    metaTitle: "What a Private Adviser Actually Does · MAKIL · Paris",
    metaDescription:
      "A private adviser explained: one point of contact, direct judgement and decisions made close to the client. By Makil-Herrero Richard, Paris.",
    keywords:
      "private adviser, private advisory, personal adviser Paris, discreet advisory, Makil-Herrero Richard",
    date: "2026-08-12",
    readingTime: "4 min",
    blocks: [
      {
        paragraphs: [
          "The title is used loosely. It is worth being exact about it, because the difference between a private adviser and everything adjacent to the term is not a matter of vocabulary, it is a matter of exposure.",
          "A private adviser is the person a family, a founder or a public figure calls before a decision is made public. Not after.",
        ],
      },
      {
        heading: "One point of contact",
        paragraphs: [
          "Most structures multiply intermediaries. Each addition is a new surface where information can travel. A private house does the opposite: it reduces the chain to a single name who reads, decides and carries the consequence.",
          "That is why the house stays deliberately small. Capacity is not a constraint here, it is the condition of the work.",
        ],
      },
      {
        heading: "Judgement before execution",
        paragraphs: [
          "Execution is the visible part. It is rarely the difficult part. The difficult part is deciding what deserves to exist at all, what should be declined, and what should simply be delayed.",
          "Observe. Decide. Deliver. In that order, and never the reverse.",
        ],
      },
      {
        heading: "Silence as a method",
        paragraphs: [
          "Silence is often described as a promise. It is more useful as a method: fewer people involved, fewer written traces, fewer requests made on your behalf without your knowledge.",
          "What is protected is not only information. It is attention.",
        ],
      },
    ],
  },
  {
    slug: "personal-branding-without-noise",
    title: "Personal branding without noise",
    kicker: "Personal branding",
    excerpt:
      "Visibility is easy to buy and difficult to repair. For a private clientele, personal branding is an exercise in subtraction.",
    metaTitle: "Personal Branding Without Noise · MAKIL · Private Adviser Paris",
    metaDescription:
      "Personal branding for private clients: restraint, consistency and a controlled public surface. Approach of Makil-Herrero Richard, private adviser in Paris.",
    keywords:
      "personal branding, private personal branding, discreet personal branding, executive image, founder branding, personal branding Paris, Makil-Herrero Richard",
    date: "2026-08-19",
    readingTime: "5 min",
    blocks: [
      {
        paragraphs: [
          "Personal branding, as it is usually practised, is an addition: more content, more platforms, more frequency. For someone whose name already carries weight, addition is the wrong operation.",
          "The work is subtraction. What can be removed without weakening the signal.",
        ],
      },
      {
        heading: "A public surface is a liability",
        paragraphs: [
          "Every public element becomes permanent, quotable and searchable. It should therefore be chosen the way one chooses a signature: rarely, and with intent.",
          "A short, exact presence outlasts a prolific one.",
        ],
      },
      {
        heading: "Consistency over frequency",
        paragraphs: [
          "One tone, one register, one way of speaking about the work. Consistency is what makes a name legible; frequency only makes it loud.",
          "The measure is simple: could someone recognise you from a single paragraph, without your name on it?",
        ],
      },
      {
        heading: "What is kept private",
        paragraphs: [
          "The strongest part of a personal brand is often what is never published. Relationships, engagements, and results that stay between the people concerned.",
          "Restraint is not the absence of a strategy. It is the strategy.",
        ],
      },
    ],
  },
  {
    slug: "discretion-as-a-standard",
    title: "Discretion as a standard, not a promise",
    kicker: "The house",
    excerpt:
      "Confidentiality is not a clause added at the end of a conversation. It is the way the conversation is organised from the first minute.",
    metaTitle: "Discretion as a Standard · Confidential Advisory · MAKIL",
    metaDescription:
      "How confidentiality is organised in a private advisory house: direct contact, minimal traces and no intermediaries. Makil-Herrero Richard, Paris."
    keywords:
      "discretion, confidentiality, confidential advisory, private clientele, private adviser Paris",
    date: "2026-08-26",
    readingTime: "3 min",
    blocks: [
      {
        paragraphs: [
          "Everyone claims discretion. Very few structures are built for it. The claim costs nothing; the structure costs capacity.",
        ],
      },
      {
        heading: "Fewer people, fewer traces",
        paragraphs: [
          "Each person added to a project multiplies the ways a name can circulate. A small practice is not a limitation of scale, it is a containment of risk.",
        ],
      },
      {
        heading: "Direct contact",
        paragraphs: [
          "Requests are answered personally. There is no queue, no account team, and no summary written by someone who never met you.",
        ],
      },
      {
        heading: "Nothing is used as a reference",
        paragraphs: [
          "No client is named, quoted or displayed. The absence of testimonials on this site is not an oversight; it is the same standard applied to itself.",
        ],
      },
    ],
  },
  {
    slug: "choosing-a-private-adviser",
    title: "Choosing a private adviser: five honest questions",
    kicker: "Guide",
    excerpt:
      "Before entrusting your name to anyone, five questions separate a practice from a pitch.",
    metaTitle: "How to Choose a Private Adviser · Five Questions · MAKIL",
    metaDescription:
      "Five questions to ask before choosing a private adviser: who answers, how many clients, what is written down, what is declined, and what stays private.",
    keywords:
      "choosing a private adviser, hire private adviser, private advisory Paris, personal branding adviser",
    date: "2026-09-02",
    readingTime: "4 min",
    blocks: [
      {
        paragraphs: [
          "The decision is rarely about competence. It is about exposure, temperament and the number of people who will end up knowing your business.",
        ],
      },
      {
        heading: "1. Who answers when I write?",
        paragraphs: [
          "If the answer is a team, the answer is a team. That is a legitimate model, but it is not a private one.",
        ],
      },
      {
        heading: "2. How many engagements are running?",
        paragraphs: [
          "Availability is finite. A practice that cannot tell you its capacity has not thought about yours.",
        ],
      },
      {
        heading: "3. What gets written down, and where?",
        paragraphs: [
          "Documents outlive relationships. Ask what is recorded, who can read it, and how long it is kept.",
        ],
      },
      {
        heading: "4. What would you decline?",
        paragraphs: [
          "An adviser who declines nothing is an executor. The value is in the refusal as much as in the delivery.",
        ],
      },
      {
        heading: "5. What will never be published?",
        paragraphs: [
          "The honest answer is: your name, your requests, and the fact that we work together, unless you decide otherwise.",
        ],
      },
    ],
  },
  {
    slug: "private-dinner-orchestrator",
    title: "What a private dinner orchestrator is for",
    kicker: "Makil Private",
    excerpt:
      "Makil Private exists to orchestrate dinners that cannot be reproduced. One room, one table, one evening, and a sequence that disappears with the guests.",
    metaTitle: "Private Dinner Orchestrator · Makil Private · Paris",
    metaDescription:
      "Makil Private orchestrates non-reproducible private dinners: closed guest lists, single-point orchestration, discretion and execution. Makil-Herrero Richard, Paris.",
    keywords:
      "Makil Private, private dinner orchestrator, private dinner Paris, non-reproducible dinner, exclusive private dinner, ultra luxury dinner, private table, private adviser, Makil-Herrero Richard",
    date: "2026-09-03",
    readingTime: "5 min",
    blocks: [
      {
        paragraphs: [
          "Makil Private is not a catering service, an agency, or an event company. It is a private orchestration for dinners that are not meant to happen twice. The purpose is singular: to hold an evening that exists only for the people in the room, and then to let it disappear.",
          "A public event is built to be repeated, sold again, photographed and reproduced. A private dinner, when it is done properly, is the opposite. It has no template, no second season, no version that can be offered to someone else. That irreducibility is exactly why it requires an orchestrator.",
        ],
      },
      {
        heading: "Non-reproducible means unforgiving",
        paragraphs: [
          "Everything that makes a dinner singular also removes the safety net. There is no rehearsal, no second service, no version B. The guest list is closed, the room is fixed, the timing is decided before anyone arrives.",
          "The orchestrator at Makil Private exists so that this fragility never becomes the host's problem. The host should have exactly one responsibility that evening: being present at their own table.",
        ],
      },
      {
        heading: "What Makil Private orchestrates",
        paragraphs: [
          "Not decoration. The sequence. Who arrives first and who arrives last. Who is seated next to whom, and why that pairing matters more than the menu. When the room goes quiet. When it should not.",
          "Suppliers, kitchen, service, transport and security are simply the visible layer. Underneath is a single decision chain, held by one name, so nothing is negotiated twice and nothing is improvised in front of guests.",
        ],
      },
      {
        heading: "Discretion is part of the format",
        paragraphs: [
          "For a private clientele, the value of a dinner is inseparable from what does not leave the room. No published guest list, no images, no supplier who can name the host afterwards.",
          "At Makil Private, discretion is treated as a working constraint rather than a promise: fewer intermediaries, fewer written traces, fewer requests made on your behalf without your knowledge.",
        ],
      },
      {
        heading: "Why one name rather than a structure",
        paragraphs: [
          "A structure distributes responsibility until no one carries it. A private orchestration is the opposite arrangement. One person reads the room, decides, and answers for the evening.",
          "That is the position Makil-Herrero Richard occupies for the houses, families and founders who work with Makil Private, in Paris and wherever their table happens to be that season.",
        ],
      },
      {
        heading: "The measure of a well-orchestrated dinner",
        paragraphs: [
          "It is not the spectacle, and it is rarely the food. It is that no one present could describe how it was made to work.",
          "Observe. Decide. Deliver. A dinner orchestrated by Makil Private is judged by what it left with the people who were there, and by the silence that follows it.",
        ],
      },
    ],
  },
];


export const getArticle = (slug?: string) =>
  journalArticles.find((a) => a.slug === slug);

export const formatArticleDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

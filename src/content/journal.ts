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
          "Silence is often described as a promise. It is more useful as a method: fewer people involved, fewer written traces, fewer requests made on one's behalf without one's knowledge.",
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
          "The measure is simple: could someone recognise the subject from a single paragraph, without a name on it?",
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
      "How confidentiality is organised in a private advisory house: direct contact, minimal traces and no intermediaries. Makil-Herrero Richard, Paris.",
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
          "Requests are answered personally. There is no queue, no account team, and no summary written by someone who never met the person concerned.",
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
      "Before entrusting a name to anyone, five questions separate a practice from a pitch.",
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
          "The decision is rarely about competence. It is about exposure, temperament and the number of people who will end up knowing the matter.",
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
          "Availability is finite. A practice that cannot state its capacity has not considered the capacity required.",
        ],
      },
      {
        heading: "3. What gets written down, and where?",
        paragraphs: [
          "Documents outlive relationships. Ask what is recorded, who can read it, and how long it is kept.",
        ],
      },
      {
        heading: "4. What would be declined?",
        paragraphs: [
          "An adviser who declines nothing is an executor. The value is in the refusal as much as in the delivery.",
        ],
      },
      {
        heading: "5. What will never be published?",
        paragraphs: [
          "The honest answer is: the name, the requests, and the fact that we work together, unless decided otherwise.",
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
          "At Makil Private, discretion is treated as a working constraint rather than a promise: fewer intermediaries, fewer written traces, fewer requests made on one's behalf without one's knowledge.",
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
  {
    slug: "why-a-private-house-does-not-scale",
    title: "Why a private house does not scale",
    kicker: "The house",
    excerpt:
      "Growth is the usual measure of success. In a private house it is the first thing that has to be refused.",
    metaTitle: "Why a Private House Does Not Scale · MAKIL · Paris",
    metaDescription:
      "Why a private adviser keeps a limited number of mandates: attention, discretion and single-point responsibility cannot be duplicated. Makil-Herrero Richard, Paris.",
    keywords:
      "private adviser, private house, limited mandates, discretion, private advisory Paris, Makil-Herrero Richard, MAKIL",
    date: "2026-09-03",
    readingTime: "4 min",
    blocks: [
      {
        paragraphs: [
          "Every structure is eventually offered the same opportunity: do more of what already works, for more people. It is presented as progress. For a private house it is the point where the work stops being what it was.",
          "What is bought here is not a capability. It is attention, and attention does not multiply.",
        ],
      },
      {
        heading: "What growth would cost",
        paragraphs: [
          "To take on more, a house has to delegate. To delegate, it has to write things down, brief intermediaries and explain contexts that were never meant to be explained twice.",
          "Each of those steps is a new surface. Nothing is stolen; things simply travel.",
        ],
      },
      {
        heading: "The limit is the method",
        paragraphs: [
          "A restricted number of mandates is not scarcity arranged for effect. It is what allows a single name to read a situation properly, decide without consultation, and answer for the outcome.",
          "Fewer engagements also means fewer compromises accepted in order to keep a calendar full.",
        ],
      },
      {
        heading: "What is kept instead",
        paragraphs: [
          "Not volume. Continuity. The same person across seasons, who already knows what was declined last year and why it should stay declined.",
          "Observe. Decide. Deliver. That sequence survives only when the number of people who need it stays small.",
        ],
      },
    ],
  },
  {
    slug: "the-first-conversation",
    title: "The first conversation",
    kicker: "The house",
    excerpt:
      "Before anything is undertaken, there is a conversation. It decides more than any document that follows.",
    metaTitle: "The First Conversation · Private Adviser · MAKIL · Paris",
    metaDescription:
      "What happens in a first conversation with a private adviser: reading the situation, defining what is not to be done, and deciding whether the house is the right one. Makil-Herrero Richard, Paris.",
    keywords:
      "private adviser first meeting, private advisory Paris, confidential conversation, discreet adviser, Makil-Herrero Richard, MAKIL",
    date: "2026-09-03",
    readingTime: "4 min",
    blocks: [
      {
        paragraphs: [
          "Nothing is undertaken before a conversation. It is not a formality placed in front of the work; it is the first part of the work, and often the part that determines everything after it.",
        ],
      },
      {
        heading: "Reading before answering",
        paragraphs: [
          "The first exchange is spent listening to what is said and noticing what is avoided. A situation is rarely described accurately the first time, not out of concealment, but because the person living it is inside it.",
          "The role is to read the situation from outside, and to say what is actually at stake.",
        ],
      },
      {
        heading: "What should not be done",
        paragraphs: [
          "Most first conversations end with a shorter list than the one they began with. Several intentions are set aside, some are postponed, one remains.",
          "Removing is the least visible part of the work and the one that protects a name most reliably.",
        ],
      },
      {
        heading: "Whether the house is the right one",
        paragraphs: [
          "Not every situation belongs here. A conversation can conclude with a name given to someone better placed, and that outcome is treated as a proper one.",
          "A mandate accepted out of politeness serves no one.",
        ],
      },
      {
        heading: "What stays after it",
        paragraphs: [
          "Nothing is recorded beyond what is necessary, nothing is repeated, and nothing is used afterwards as a reference.",
          "Observe. Decide. Deliver. The first conversation is where the first two happen.",
        ],
      },
    ],
  },
  {
    slug: "the-cost-of-being-everywhere",
    title: "The cost of being everywhere",
    kicker: "Presence",
    excerpt:
      "Visibility is easy to obtain and expensive to carry. A name that appears everywhere is read as available; a name that appears rarely is read as chosen.",
    metaTitle: "The Cost of Being Everywhere · MAKIL · Paris",
    metaDescription:
      "Why constant visibility weakens a name, and how restraint protects authority. Notes by Makil-Herrero Richard, private adviser in Paris.",
    keywords:
      "personal branding restraint, discreet visibility, reputation management, private adviser Paris, Makil-Herrero Richard",
    date: "2026-09-04",
    readingTime: "4 min",
    blocks: [
      {
        paragraphs: [
          "Presence is now measured in frequency. The assumption is that a name grows by appearing more often, in more places, before more people. In private matters, the arithmetic runs the other way.",
          "A name that can be found everywhere is understood to be available to everyone. Availability is the opposite of selection, and selection is what gives a name its weight.",
        ],
      },
      {
        heading: "What visibility actually buys",
        paragraphs: [
          "Exposure produces volume: more requests, more conversations, more situations that were never meant for the person concerned. Very little of it is useful, and all of it consumes the one resource that cannot be replaced, which is attention.",
          "The question is never how many people know the name. It is which people, and in what context they heard it.",
        ],
      },
      {
        heading: "The discipline of appearing rarely",
        paragraphs: [
          "Appearing rarely is not modesty. It is a decision renewed each time an occasion presents itself, and most occasions are declined.",
          "What remains is read differently. A rare appearance carries the assumption that it was considered, and that assumption is precisely what cannot be bought.",
        ],
      },
      {
        heading: "Silence is not absence",
        paragraphs: [
          "A house that says little is not inactive. The work is continuous; only its traces are withheld.",
          "Observe. Decide. Deliver. Nothing in that sequence requires an audience.",
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

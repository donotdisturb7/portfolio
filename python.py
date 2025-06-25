# 1. RETRIEVAL : Cherche l'info pertinente
history_aware_retriever = create_history_aware_retriever(...)

# 2. GENERATION : Formule la réponse
question_answer_chain = create_stuff_documents_chain(...)

# 3. RAG = Combinaison des deux
rag_chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)
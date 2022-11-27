FROM tavishpegram/unison:latest

# Copy in transcript that describes how to pull the source unison code and to build server.uc
COPY compile-transcript.md .

RUN ["ucm", "transcript", "compile-transcript.md"]

ARG googleplaces_api_key
ENV GOOGLEPLACES_API_KEY $googleplaces_api_key
# Run the compiled file
ENTRYPOINT ["ucm", "run.compiled", "server.uc", "+RTS", "-N"]
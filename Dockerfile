# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /source
COPY . .
RUN dotnet restore "./WebUI/WebUI.csproj" --disable-parallel
RUN dotnet publish "./WebUI/WebUI.csproj" -c release -o /app out --no-restore

# Serve Stage
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /app ./
ENTRYPOINT ["dotnet", "Resume.WebUI.dll"]